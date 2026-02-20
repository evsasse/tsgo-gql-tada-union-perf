import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken708 } from "./fragment708";
import type { FragmentToken709 } from "./fragment709";

export const FRAGMENT_710 = gql(`
  fragment Fragment710 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult710 = ResultOf<typeof FRAGMENT_710>;
type FragmentSelf710 = NonNullable<FragmentResult710>;

export type FragmentToken710 =
  | FragmentSelf710["__typename"]
  | FragmentSelf710["typenameHint"] | FragmentToken708 | FragmentToken709;
