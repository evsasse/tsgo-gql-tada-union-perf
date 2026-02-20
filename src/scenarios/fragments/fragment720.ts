import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken718 } from "./fragment718";
import type { FragmentToken719 } from "./fragment719";

export const FRAGMENT_720 = gql(`
  fragment Fragment720 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult720 = ResultOf<typeof FRAGMENT_720>;
type FragmentSelf720 = NonNullable<FragmentResult720>;

export type FragmentToken720 =
  | FragmentSelf720["__typename"]
  | FragmentSelf720["typenameHint"] | FragmentToken718 | FragmentToken719;
