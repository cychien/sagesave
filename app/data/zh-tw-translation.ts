/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */
import type { LocalizationResource } from "@clerk/types";

export const zhTW: LocalizationResource = {
  locale: "zh-TW",
  backButton: "返回",
  badge__default: "默認",
  badge__otherImpersonatorDevice: "其他模擬器設備",
  badge__primary: "主要",
  badge__requiresAction: "需要操作",
  badge__thisDevice: "此設備",
  badge__unverified: "未驗證",
  badge__userDevice: "用戶設備",
  badge__you: "您",
  createOrganization: {
    formButtonSubmit: "創建組織",
    invitePage: {
      formButtonReset: "跳過",
    },
    title: "創建組織",
  },
  dates: {
    lastDay: "昨天{{ date | timeString('zh-TW') }}",
    next6Days:
      "{{ date | weekday('zh-TW','long') }} {{ date | timeString('zh-TW') }}",
    nextDay: "明天{{ date | timeString('zh-TW') }}",
    numeric: "{{ date | numeric('zh-TW') }}",
    previous6Days:
      "上週{{ date | weekday('zh-TW','long') }} {{ date | timeString('zh-TW') }}",
    sameDay: "今天{{ date | timeString('zh-TW') }}",
  },
  dividerText: "或者",
  footerActionLink__useAnotherMethod: "使用另一種方法",
  footerPageLink__help: "幫助",
  footerPageLink__privacy: "隱私",
  footerPageLink__terms: "條款",
  formButtonPrimary: "繼續",
  formButtonPrimary__verify: "Verify",
  formFieldAction__forgotPassword: "忘記密碼？",
  formFieldError__matchingPasswords: "密碼匹配。",
  formFieldError__notMatchingPasswords: "密碼不匹配。",
  formFieldError__verificationLinkExpired:
    "The verification link expired. Please request a new link.",
  formFieldHintText__optional: "選填",
  formFieldHintText__slug:
    "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Delete account",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__emailAddresses:
    "輸入或黏貼一個或多個電子郵件地址，用空格或逗號分隔",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__organizationDomain: "",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldInputPlaceholder__organizationSlug: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldLabel__automaticInvitations:
    "Enable automatic invitations for this domain",
  formFieldLabel__backupCode: "備用代碼",
  formFieldLabel__confirmDeletion: "確定",
  formFieldLabel__confirmPassword: "確認密碼",
  formFieldLabel__currentPassword: "當前密碼",
  formFieldLabel__emailAddress: "電子郵件地址",
  formFieldLabel__emailAddress_username: "電子郵件地址或使用者名稱",
  formFieldLabel__emailAddresses: "電子郵件地址",
  formFieldLabel__firstName: "名字",
  formFieldLabel__lastName: "姓氏",
  formFieldLabel__newPassword: "新密碼",
  formFieldLabel__organizationDomain: "Domain",
  formFieldLabel__organizationDomainDeletePending:
    "Delete pending invitations and suggestions",
  formFieldLabel__organizationDomainEmailAddress: "Verification email address",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "Enter an email address under this domain to receive a code and verify this domain.",
  formFieldLabel__organizationName: "組織名稱",
  formFieldLabel__organizationSlug: "URL 簡稱",
  formFieldLabel__password: "密碼",
  formFieldLabel__phoneNumber: "電話號碼",
  formFieldLabel__role: "角色",
  formFieldLabel__signOutOfOtherSessions: "登出所有其他設備",
  formFieldLabel__username: "使用者名稱",
  impersonationFab: {
    action__signOut: "退出登錄",
    title: "以 {{identifier}} 登錄",
  },
  membershipRole__admin: "管理員",
  membershipRole__basicMember: "成員",
  membershipRole__guestMember: "訪客",
  organizationList: {
    action__createOrganization: "Create organization",
    action__invitationAccept: "Join",
    action__suggestionsAccept: "Request to join",
    createOrganization: "Create Organization",
    invitationAcceptedLabel: "Joined",
    subtitle: "to continue to {{applicationName}}",
    suggestionsAcceptedLabel: "Pending approval",
    title: "Choose an account",
    titleWithoutPersonal: "Choose an organization",
  },
  organizationProfile: {
    badge__automaticInvitation: "Automatic invitations",
    badge__automaticSuggestion: "Automatic suggestions",
    badge__manualInvitation: "No automatic enrollment",
    badge__unverified: "Unverified",
    createDomainPage: {
      subtitle:
        "Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.",
      title: "Add domain",
    },
    invitePage: {
      detailsTitle__inviteFailed: "邀請無法發送。修覆以下問題然後重試：",
      formButtonPrimary__continue: "發送邀請",
      subtitle: "邀請新成員加入此組織",
      successMessage: "邀請成功發送",
      title: "邀請成員",
    },
    membersPage: {
      action__invite: "邀請",
      activeMembersTab: {
        menuAction__remove: "移除成員",
        tableHeader__actions: "",
        tableHeader__joined: "加入",
        tableHeader__role: "角色",
        tableHeader__user: "用戶",
      },
      detailsTitle__emptyRow: "沒有可顯示的成員",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.",
          headerTitle: "Automatic invitations",
          primaryButton: "Manage verified domains",
        },
        manualInvitations: {
          headerSubtitle:
            "Manually invite members and manage existing invitations.",
          headerTitle: "Individual invitations",
        },
        table__emptyRow: "No invitations to display",
      },
      invitedMembersTab: {
        menuAction__revoke: "撤銷邀請",
        tableHeader__invited: "已邀請",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.",
          headerTitle: "Automatic suggestions",
          primaryButton: "Manage verified domains",
        },
        menuAction__approve: "Approve",
        menuAction__reject: "Reject",
        requests: {
          headerSubtitle:
            "Browse and manage users who requested to join the organization.",
          headerTitle: "Requests",
        },
        tableHeader__requested: "Requested access",
        table__emptyRow: "No requests to display",
      },
      start: {
        headerTitle__invitations: "Invitations",
        headerTitle__members: "Members",
        headerTitle__requests: "Requests",
      },
    },
    navbar: {
      description: "Manage your organization.",
      general: "General",
      members: "Members",
      title: "Organization",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: "Are you sure you want to delete this organization?",
          messageLine2: "This action is permanent and irreversible.",
          successMessage: "You have deleted the organization.",
          title: "Delete organization",
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1:
            "您確定要離開此組織嗎？您將失去對此組織及其應用程式的訪問權限。",
          messageLine2: "此操作是永久性的且無法撤銷。",
          successMessage: "您已離開了組織。",
          title: "離開組織",
        },
        title: "危險",
      },
      domainSection: {
        menuAction__manage: "Manage",
        menuAction__remove: "Delete",
        menuAction__verify: "Verify",
        primaryButton: "Add domain",
        subtitle:
          "Allow users to join the organization automatically or request to join based on a verified email domain.",
        title: "Verified domains",
      },
      successMessage: "組織已更新。",
      title: "組織簡介",
    },
    removeDomainPage: {
      messageLine1: "The email domain {{domain}} will be removed.",
      messageLine2:
        "Users won’t be able to join the organization automatically after this.",
      successMessage: "{{domain}} has been removed.",
      title: "Remove domain",
    },
    start: {
      headerTitle__general: "General",
      headerTitle__members: "成員",
      profileSection: {
        primaryButton: "Edit profile",
        title: "Organization Profile",
        uploadAction__title: "Logo",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: "Removing this domain will affect invited users.",
        removeDomainActionLabel__remove: "Remove domain",
        removeDomainSubtitle: "Remove this domain from your verified domains",
        removeDomainTitle: "Remove domain",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "Users are automatically invited to join the organization when they sign-up and can join anytime.",
        automaticInvitationOption__label: "Automatic invitations",
        automaticSuggestionOption__description:
          "Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.",
        automaticSuggestionOption__label: "Automatic suggestions",
        calloutInfoLabel:
          "Changing the enrollment mode will only affect new users.",
        calloutInvitationCountLabel:
          "Pending invitations sent to users: {{count}}",
        calloutSuggestionCountLabel:
          "Pending suggestions sent to users: {{count}}",
        formButton__save: "Save",
        manualInvitationOption__description:
          "Users can only be invited manually to the organization.",
        manualInvitationOption__label: "No automatic enrollment",
        subtitle:
          "Choose how users from this domain can join the organization.",
      },
      start: {
        headerTitle__danger: "Danger",
        headerTitle__enrollment: "Enrollment options",
      },
      subtitle:
        "The domain {{domain}} is now verified. Continue by selecting enrollment mode.",
      title: "Update {{domain}}",
    },
    verifyDomainPage: {
      formSubtitle: "Enter the verification code sent to your email address",
      formTitle: "Verification code",
      resendButton: "Didn't receive a code? Resend",
      subtitle: "The domain {{domainName}} needs to be verified via email.",
      subtitleVerificationCodeScreen:
        "A verification code was sent to {{emailAddress}}. Enter the code to continue.",
      title: "Verify domain",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "創建組織",
    action__invitationAccept: "Join",
    action__manageOrganization: "管理組織",
    action__suggestionsAccept: "Request to join",
    notSelected: "未選擇組織",
    personalWorkspace: "個人工作區",
    suggestionsAcceptedLabel: "Pending approval",
  },
  paginationButton__next: "下一頁",
  paginationButton__previous: "上一頁",
  paginationRowText__displaying: "顯示",
  paginationRowText__of: "的",
  signIn: {
    alternativeMethods: {
      actionLink: "獲取幫助",
      actionText: "Don’t have any of these?",
      blockButton__backupCode: "使用備用代碼",
      blockButton__emailCode: "電子郵件驗證碼到 {{identifier}}",
      blockButton__emailLink: "電子郵件連結到 {{identifier}}",
      blockButton__password: "使用您的密碼登錄",
      blockButton__phoneCode: "發送簡訊代碼到 {{identifier}}",
      blockButton__totp: "使用您的驗證應用程式",
      getHelp: {
        blockButton__emailSupport: "郵件支持",
        content:
          "如果您在登入帳戶時遇到困難，請給我們發送電子郵件，我們將盡快讓您恢覆訪問。",
        title: "獲取幫助",
      },
      subtitle: "Facing issues? You can use any of these methods to sign in.",
      title: "使用其他方法",
    },
    backupCodeMfa: {
      subtitle: "繼續使用 {{applicationName}}",
      title: "輸入備用代碼",
    },
    emailCode: {
      formTitle: "驗證碼",
      resendButton: "重新發送驗證碼",
      subtitle: "繼續使用 {{applicationName}}",
      title: "查看您的電子郵件",
    },
    emailLink: {
      expired: {
        subtitle: "返回原始標籤頁繼續。",
        title: "此驗證連結已過期",
      },
      failed: {
        subtitle: "返回原始標籤頁繼續。",
        title: "此驗證連結無效",
      },
      formSubtitle: "使用發送到您的電子郵件的驗證連結",
      formTitle: "驗證連結",
      loading: {
        subtitle: "即將為您重定向",
        title: "正在登錄...",
      },
      resendButton: "重新發送連結",
      subtitle: "繼續使用 {{applicationName}}",
      title: "查看您的電子郵件",
      unusedTab: {
        title: "您可以關閉此標籤頁",
      },
      verified: {
        subtitle: "即將為您重定向",
        title: "成功登錄",
      },
      verifiedSwitchTab: {
        subtitle: "返回原始標籤頁繼續",
        subtitleNewTab: "返回新打開的標籤頁繼續",
        titleNewTab: "在其他標籤頁上登入",
      },
    },
    forgotPassword: {
      formTitle: "重設密碼代碼",
      resendButton: "重新發送代碼",
      subtitle: "to reset your password",
      subtitle_email: "First, enter the code sent to your email ID",
      subtitle_phone: "First, enter the code sent to your phone",
      title: "Reset password",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "重設密碼",
      label__alternativeMethods: "或者，使用其他方式登錄。",
      title: "忘記密碼？",
    },
    noAvailableMethods: {
      message: "無法繼續登錄。沒有可用的身份驗證因素。",
      subtitle: "出現錯誤",
      title: "無法登錄",
    },
    password: {
      actionLink: "使用其他方法",
      subtitle: "繼續使用 {{applicationName}}",
      title: "輸入您的密碼",
    },
    phoneCode: {
      formTitle: "驗證碼",
      resendButton: "重新發送驗證碼",
      subtitle: "繼續使用 {{applicationName}}",
      title: "檢查手機簡訊",
    },
    phoneCodeMfa: {
      formTitle: "驗證碼",
      resendButton: "重新發送驗證碼",
      subtitle: "",
      title: "檢查手機簡訊",
    },
    resetPassword: {
      formButtonPrimary: "重設密碼",
      requiredMessage:
        "An account already exists with an unverified email address. Please reset your password for security.",
      successMessage: "您的密碼已成功更改。正在為您登錄，請稍等。",
      title: "重設密碼",
    },
    resetPasswordMfa: {
      detailsLabel: "我們需要驗證您的身份才能重設您的密碼。",
    },
    start: {
      actionLink: "註冊",
      actionLink__use_email: "使用電子郵件",
      actionLink__use_email_username: "使用電子郵件或使用者名稱",
      actionLink__use_phone: "使用電話",
      actionLink__use_username: "使用使用者名稱",
      actionText: "還沒有帳戶？",
      subtitle: "繼續使用 {{applicationName}}",
      title: "登錄",
    },
    totpMfa: {
      formTitle: "驗證碼",
      subtitle: "",
      title: "兩步驗證",
    },
  },
  signInEnterPasswordTitle: "輸入您的密碼",
  signUp: {
    continue: {
      actionLink: "登錄",
      actionText: "已經有帳戶了？",
      subtitle: "繼續使用 {{applicationName}}",
      title: "填寫缺少的欄位",
    },
    emailCode: {
      formSubtitle: "輸入發送到您的電子郵件地址的驗證碼",
      formTitle: "驗證碼",
      resendButton: "重新發送驗證碼",
      subtitle: "繼續使用 {{applicationName}}",
      title: "驗證您的電子郵件",
    },
    emailLink: {
      formSubtitle: "使用發送到您的電子郵件地址的驗證連結",
      formTitle: "驗證連結",
      loading: {
        title: "正在註冊...",
      },
      resendButton: "重新發送連結",
      subtitle: "繼續使用 {{applicationName}}",
      title: "驗證您的電子郵件",
      verified: {
        title: "成功註冊",
      },
      verifiedSwitchTab: {
        subtitle: "返回新打開的標籤頁繼續",
        subtitleNewTab: "返回上一個標籤頁繼續",
        title: "成功驗證電子郵件",
      },
    },
    phoneCode: {
      formSubtitle: "輸入發送到您的電話號碼的驗證碼",
      formTitle: "驗證碼",
      resendButton: "重新發送驗證碼",
      subtitle: "繼續使用 {{applicationName}}",
      title: "驗證您的電話",
    },
    start: {
      actionLink: "登錄",
      actionText: "已經有帳戶了？",
      subtitle: "繼續使用 {{applicationName}}",
      title: "創建您的帳戶",
    },
  },
  socialButtonsBlockButton: "使用 {{provider|titleize}} 登錄",
  unstable__errors: {
    captcha_invalid:
      "由於安全驗證失敗，註冊未成功。請刷新頁面重試或聯絡支持獲取更多幫助。",
    captcha_unavailable:
      "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
    form_code_incorrect: "",
    form_identifier_exists: "",
    form_identifier_not_found: "",
    form_param_format_invalid: "",
    form_param_format_invalid__email_address:
      "Email address must be a valid email address.",
    form_param_format_invalid__phone_number:
      "Phone number must be in a valid international format",
    form_param_max_length_exceeded__first_name:
      "First name should not exceed 256 characters.",
    form_param_max_length_exceeded__last_name:
      "Last name should not exceed 256 characters.",
    form_param_max_length_exceeded__name:
      "Name should not exceed 256 characters.",
    form_param_nil: "",
    form_password_incorrect: "",
    form_password_length_too_short: "",
    form_password_not_strong_enough: "您的密碼強度不夠。",
    form_password_pwned:
      "這個密碼在數據洩露中被發現，不能使用，請換一個密碼試試。",
    form_password_size_in_bytes_exceeded:
      "您的密碼超過了允許的最大位元組數，請縮短它或去掉一些特殊字元。",
    form_password_validation_failed: "密碼錯誤",
    form_username_invalid_character: "",
    form_username_invalid_length: "",
    identification_deletion_failed:
      "You cannot delete your last identification.",
    not_allowed_access: "",
    passwordComplexity: {
      maximumLength: "少於{{length}}個字元",
      minimumLength: "{{length}}個或更多字元",
      requireLowercase: "一個小寫字母",
      requireNumbers: "一個數字",
      requireSpecialCharacter: "一個特殊字元",
      requireUppercase: "一個大寫字母",
      sentencePrefix: "您的密碼必須包含",
    },
    phone_number_exists: "This phone number is taken. Please try another.",
    zxcvbn: {
      couldBeStronger: "您的密碼可以用，但可以更強。試著添加更多字元。",
      goodPassword: "做得好。這是一個優秀的密碼。",
      notEnough: "您的密碼強度不夠。",
      suggestions: {
        allUppercase: "大寫一些，但不是所有的字母。",
        anotherWord: "添加更不常見的更多單字。",
        associatedYears: "避免與你有關的年份。",
        capitalization: "大寫不僅僅是第一個字母。",
        dates: "避免與你有關的日期和年份。",
        l33t: '避免預測的字母替換，如"@"代替"a"。',
        longerKeyboardPattern: "使用更長的鍵盤模式，並多次改變打字方向。",
        noNeed: "你可以創建強密碼，而無需使用符號，數字或大寫字母。",
        pwned: "如果您在其他地方使用此密碼，您應該更改它。",
        recentYears: "避免近年來。",
        repeated: "避免重複的單字和字元。",
        reverseWords: "避免常用詞的反向拼寫。",
        sequences: "避免常見字元序列。",
        useWords: "使用多個單字，但避免常見短語。",
      },
      warnings: {
        common: "這是一個常用的密碼。",
        commonNames: "常見的名字和姓氏易被猜到。",
        dates: "日期易被猜到。",
        extendedRepeat: '像"abcabcabc"這樣的重複字元模式易被猜到。',
        keyPattern: "短鍵盤模式易被猜到。",
        namesByThemselves: "單個名字或姓氏易被猜到。",
        pwned: "您的密碼在網路上的數據洩露中被暴露。",
        recentYears: "近年來易被猜到。",
        sequences: '像"abc"這樣的常見字元序列易被猜到。',
        similarToCommon: "這個密碼和常用密碼相似。",
        simpleRepeat: '像"aaa"這樣的重複字元易被猜到。',
        straightRow: "鍵盤上的直行鍵易被猜到。",
        topHundred: "這是一個頻繁使用的密碼。",
        topTen: "這是一個大量使用的密碼。",
        userInputs: "不應該有任何個人或頁面相關的數據。",
        wordByItself: "單個單字易被猜到。",
      },
    },
  },
  userButton: {
    action__addAccount: "添加帳戶",
    action__manageAccount: "管理帳戶",
    action__signOut: "退出登錄",
    action__signOutAll: "退出所有帳戶",
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: "已複製！",
      actionLabel__copy: "複製全部",
      actionLabel__download: "下載 .txt",
      actionLabel__print: "列印",
      infoText1: "將為此帳戶啟用備份代碼。",
      infoText2:
        "保密並安全儲存備份代碼。如果您懷疑它們已經洩露，您可以重新生成備份代碼。",
      subtitle__codelist: "安全儲存並保守秘密。",
      successMessage:
        "現在已啟用備份代碼。如果您失去了驗證設備的訪問權限，您可以使用其中之一登入您的帳戶。每個代碼只能使用一次。",
      successSubtitle:
        "如果您失去了驗證設備的訪問權限，您可以使用其中之一登入您的帳戶。",
      title: "添加備份代碼驗證",
      title__codelist: "備份代碼",
    },
    connectedAccountPage: {
      formHint: "選擇一個供應商來連接您的帳戶。",
      formHint__noAccounts: "沒有可用的外部帳戶供應商。",
      removeResource: {
        messageLine1: "{{identifier}} 將從此帳戶中被移除。",
        messageLine2:
          "您將無法再使用這個已連接的帳戶，任何依賴的功能將不再工作。",
        successMessage: "{{connectedAccount}} 已從您的帳戶中移除。",
        title: "移除已連接的帳戶",
      },
      socialButtonsBlockButton: "連接 {{provider|titleize}} 帳戶",
      successMessage: "供應商已被添加到您的帳戶",
      title: "添加已連接的帳戶",
    },
    deletePage: {
      actionDescription: "請在下方輸入“Delete account”以繼續。",
      confirm: "移除帳戶",
      messageLine1: "您確定要刪除您的帳戶嗎？",
      messageLine2: "這個動作是永久性且無法還原的。",
      title: "移除帳戶",
    },
    emailAddressPage: {
      emailCode: {
        formHint: "一封含有驗證碼的郵件將會被發送到這個電子郵件地址。",
        formSubtitle: "輸入發送到 {{identifier}} 的驗證碼",
        formTitle: "驗證碼",
        resendButton: "重發驗證碼",
        successMessage: "電子郵件 {{identifier}} 已被添加到您的帳戶。",
      },
      emailLink: {
        formHint: "一封含有驗證連結的郵件將會被發送到這個電子郵件地址。",
        formSubtitle: "點擊發送到 {{identifier}} 的郵件中的驗證連結",
        formTitle: "驗證連結",
        resendButton: "重發連結",
        successMessage: "電子郵件 {{identifier}} 已被添加到您的帳戶。",
      },
      removeResource: {
        messageLine1: "{{identifier}} 將從此帳戶中被移除。",
        messageLine2: "您將無法使用這個電子郵件地址登錄。",
        successMessage: "電子郵件 {{emailAddress}} 已從您的帳戶中移除。",
        title: "移除電子郵件地址",
      },
      title: "添加電子郵件地址",
    },
    formButtonPrimary__continue: "繼續",
    formButtonPrimary__finish: "完成",
    formButtonReset: "取消",
    mfaPage: {
      formHint: "選擇一個添加的方法。",
      title: "添加兩步驗證",
    },
    mfaPhoneCodePage: {
      primaryButton__addPhoneNumber: "添加電話號碼",
      removeResource: {
        messageLine1: "{{identifier}} 將不再在登錄時接收驗證代碼。",
        messageLine2: "您的帳戶可能不再安全。您確定要繼續嗎？",
        successMessage: "已移除{{mfaPhoneCode}}的簡訊驗證碼兩步驗證",
        title: "移除兩步驗證",
      },
      subtitle__availablePhoneNumbers:
        "選擇一個電話號碼來註冊簡訊驗證碼兩步驗證。",
      subtitle__unavailablePhoneNumbers:
        "沒有可用的電話號碼來註冊簡訊驗證碼兩步驗證。",
      successMessage:
        "現在已啟用此電話號碼的簡訊驗證碼兩步驗證。在登錄時，您需要輸入發送到這個電話號碼的驗證碼作為額外步驟。",
      title: "添加簡訊驗證碼驗證",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "掃描二維碼",
        buttonUnableToScan__nonPrimary: "不能掃描二維碼？",
        infoText__ableToScan:
          "在您的驗證器應用中設置一個新的登錄方法，並掃描下面的二維碼將其連結到您的帳戶。",
        infoText__unableToScan:
          "在驗證器中設置一個新的登錄方法，並輸入下面提供的 Key。",
        inputLabel__unableToScan1:
          "確保啟用了基於時間或一次性密碼，然後完成連結您的帳戶。",
        inputLabel__unableToScan2:
          "或者，如果您的驗證器支持 TOTP URIs，您也可以複製完整的 URI。",
      },
      removeResource: {
        messageLine1: "登錄時，將不再需要來自此驗證器的驗證碼。",
        messageLine2: "您的帳戶可能不再安全。您確定要繼續嗎？",
        successMessage: "已移除通過驗證器應用程式的兩步驗證。",
        title: "移除兩步驗證",
      },
      successMessage:
        "現在已啟用兩步驗證。在登錄時，您需要輸入來自此驗證器的驗證碼作為額外步驟。",
      title: "添加驗證器應用程式",
      verifySubtitle: "輸入您的驗證器生成的驗證碼",
      verifyTitle: "驗證代碼",
    },
    mobileButton__menu: "菜單",
    navbar: {
      account: "Profile",
      description: "Manage your account info.",
      security: "Security",
      title: "Account",
    },
    passwordPage: {
      changePasswordSuccessMessage: "您的密碼已更新。",
      changePasswordTitle: "更改密碼",
      readonly:
        "Your password can currently not be edited because you can sign in only via the enterprise connection.",
      sessionsSignedOutSuccessMessage: "所有其他設備已退出。",
      successMessage: "您的密碼已設置。",
      title: "設置密碼",
    },
    phoneNumberPage: {
      infoText: "一條包含驗證連結的簡訊將會發送到這個電話號碼。",
      infoText__secondary: "可能會產生資訊和數據費用。",
      removeResource: {
        messageLine1: "{{identifier}} 將從此帳戶中被移除。",
        messageLine2: "您將無法使用這個電話號碼登錄。",
        successMessage: "電話號碼 {{phoneNumber}} 已從您的帳戶中移除。",
        title: "移除電話號碼",
      },
      successMessage: "{{identifier}} 已被添加到您的帳戶。",
      title: "添加電話號碼",
    },
    profilePage: {
      fileDropAreaHint: "上傳小於10MB的JPG, PNG, GIF, 或WEBP格式的圖片",
      imageFormDestructiveActionSubtitle: "移除圖片",
      imageFormSubtitle: "上傳圖片",
      imageFormTitle: "個人資料圖片",
      readonly:
        "Your profile information has been provided by the enterprise connection and cannot be edited.",
      successMessage: "您的個人資料已更新。",
      title: "更新個人資料",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "退出設備",
        title: "活動設備",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "再試一次",
        actionLabel__reauthorize: "立即授權",
        destructiveActionTitle: "移除",
        primaryButton: "連接帳戶",
        title: "已連接的帳戶",
      },
      dangerSection: {
        deleteAccountButton: "移除帳戶",
        title: "危險",
      },
      emailAddressesSection: {
        destructiveAction: "移除電子郵件地址",
        detailsAction__nonPrimary: "設為主要",
        detailsAction__primary: "完成驗證",
        detailsAction__unverified: "完成驗證",
        primaryButton: "添加電子郵件地址",
        title: "電子郵件地址",
      },
      enterpriseAccountsSection: {
        title: "企業帳戶",
      },
      headerTitle__account: "帳戶",
      headerTitle__security: "安全",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "重新生成代碼",
          headerTitle: "備份代碼",
          subtitle__regenerate:
            "獲取一套新的安全備份代碼。之前的備份代碼將被刪除，無法使用。",
          title__regenerate: "重新生成備份代碼",
        },
        phoneCode: {
          actionLabel__setDefault: "設為默認",
          destructiveActionLabel: "移除電話號碼",
        },
        primaryButton: "添加兩步驗證",
        title: "兩步驗證",
        totp: {
          destructiveActionTitle: "移除",
          headerTitle: "驗證器應用程式",
        },
      },
      passwordSection: {
        primaryButton__changePassword: "更改密碼",
        primaryButton__setPassword: "設置密碼",
        title: "密碼",
      },
      phoneNumbersSection: {
        destructiveAction: "移除電話號碼",
        detailsAction__nonPrimary: "設為主要",
        detailsAction__primary: "完成驗證",
        detailsAction__unverified: "完成驗證",
        primaryButton: "添加電話號碼",
        title: "電話號碼",
      },
      profileSection: {
        primaryButton: "Edit Profile",
        title: "個人資料",
      },
      usernameSection: {
        primaryButton__changeUsername: "更改使用者名稱",
        primaryButton__setUsername: "設置使用者名稱",
        title: "使用者名稱",
      },
      web3WalletsSection: {
        destructiveAction: "移除錢包",
        primaryButton: "Web3 錢包",
        title: "Web3 錢包",
      },
    },
    usernamePage: {
      successMessage: "您的使用者名稱已更新。",
      title: "更新使用者名稱",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "{{identifier}} 將從此帳戶中被移除。",
        messageLine2: "您將無法使用這個 web3 錢包登錄。",
        successMessage: "{{web3Wallet}} 已從您的帳戶中移除。",
        title: "移除 web3 錢包",
      },
      subtitle__availableWallets: "選擇一個 web3 錢包連接到您的帳戶。",
      subtitle__unavailableWallets: "沒有可用的 web3 錢包。",
      successMessage: "錢包已被添加到您的帳戶。",
      title: "添加web3錢包",
    },
  },
} as const;