import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken191 } from "./fragment191";
import type { FragmentToken192 } from "./fragment192";

export const FRAGMENT_193 = gql(`
  fragment Fragment193 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult193 = ResultOf<typeof FRAGMENT_193>;
type FragmentSelf193 = NonNullable<FragmentResult193>;

export type FragmentToken193 =
  | FragmentSelf193["__typename"]
  | FragmentSelf193["typenameHint"] | FragmentToken191 | FragmentToken192;
