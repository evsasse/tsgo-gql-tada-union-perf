import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken719 } from "./fragment719";
import type { FragmentToken720 } from "./fragment720";

export const FRAGMENT_721 = gql(`
  fragment Fragment721 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult721 = ResultOf<typeof FRAGMENT_721>;
type FragmentSelf721 = NonNullable<FragmentResult721>;

export type FragmentToken721 =
  | FragmentSelf721["__typename"]
  | FragmentSelf721["typenameHint"] | FragmentToken719 | FragmentToken720;
