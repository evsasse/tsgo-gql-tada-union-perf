import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken236 } from "./fragment236";
import type { FragmentToken237 } from "./fragment237";

export const FRAGMENT_238 = gql(`
  fragment Fragment238 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult238 = ResultOf<typeof FRAGMENT_238>;
type FragmentSelf238 = NonNullable<FragmentResult238>;

export type FragmentToken238 =
  | FragmentSelf238["__typename"]
  | FragmentSelf238["typenameHint"] | FragmentToken236 | FragmentToken237;
