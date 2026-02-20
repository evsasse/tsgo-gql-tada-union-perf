import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1734 } from "./fragment1734";
import type { FragmentToken1735 } from "./fragment1735";

export const FRAGMENT_1736 = gql(`
  fragment Fragment1736 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult1736 = ResultOf<typeof FRAGMENT_1736>;
type FragmentSelf1736 = NonNullable<FragmentResult1736>;

export type FragmentToken1736 =
  | FragmentSelf1736["__typename"]
  | FragmentSelf1736["typenameHint"] | FragmentToken1734 | FragmentToken1735;
