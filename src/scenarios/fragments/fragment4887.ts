import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4885 } from "./fragment4885";
import type { FragmentToken4886 } from "./fragment4886";

export const FRAGMENT_4887 = gql(`
  fragment Fragment4887 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult4887 = ResultOf<typeof FRAGMENT_4887>;
type FragmentSelf4887 = NonNullable<FragmentResult4887>;

export type FragmentToken4887 =
  | FragmentSelf4887["__typename"]
  | FragmentSelf4887["typenameHint"] | FragmentToken4885 | FragmentToken4886;
