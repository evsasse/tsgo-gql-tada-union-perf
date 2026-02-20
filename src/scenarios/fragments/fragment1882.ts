import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1880 } from "./fragment1880";
import type { FragmentToken1881 } from "./fragment1881";

export const FRAGMENT_1882 = gql(`
  fragment Fragment1882 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult1882 = ResultOf<typeof FRAGMENT_1882>;
type FragmentSelf1882 = NonNullable<FragmentResult1882>;

export type FragmentToken1882 =
  | FragmentSelf1882["__typename"]
  | FragmentSelf1882["typenameHint"] | FragmentToken1880 | FragmentToken1881;
