import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken193 } from "./fragment193";
import type { FragmentToken194 } from "./fragment194";

export const FRAGMENT_195 = gql(`
  fragment Fragment195 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult195 = ResultOf<typeof FRAGMENT_195>;
type FragmentSelf195 = NonNullable<FragmentResult195>;

export type FragmentToken195 =
  | FragmentSelf195["__typename"]
  | FragmentSelf195["typenameHint"] | FragmentToken193 | FragmentToken194;
