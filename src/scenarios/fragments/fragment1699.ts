import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1697 } from "./fragment1697";
import type { FragmentToken1698 } from "./fragment1698";

export const FRAGMENT_1699 = gql(`
  fragment Fragment1699 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult1699 = ResultOf<typeof FRAGMENT_1699>;
type FragmentSelf1699 = NonNullable<FragmentResult1699>;

export type FragmentToken1699 =
  | FragmentSelf1699["__typename"]
  | FragmentSelf1699["typenameHint"] | FragmentToken1697 | FragmentToken1698;
