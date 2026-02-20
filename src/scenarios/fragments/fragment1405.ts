import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1403 } from "./fragment1403";
import type { FragmentToken1404 } from "./fragment1404";

export const FRAGMENT_1405 = gql(`
  fragment Fragment1405 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult1405 = ResultOf<typeof FRAGMENT_1405>;
type FragmentSelf1405 = NonNullable<FragmentResult1405>;

export type FragmentToken1405 =
  | FragmentSelf1405["__typename"]
  | FragmentSelf1405["typenameHint"] | FragmentToken1403 | FragmentToken1404;
