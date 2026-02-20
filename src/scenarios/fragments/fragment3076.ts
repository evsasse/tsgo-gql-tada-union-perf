import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3074 } from "./fragment3074";
import type { FragmentToken3075 } from "./fragment3075";

export const FRAGMENT_3076 = gql(`
  fragment Fragment3076 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult3076 = ResultOf<typeof FRAGMENT_3076>;
type FragmentSelf3076 = NonNullable<FragmentResult3076>;

export type FragmentToken3076 =
  | FragmentSelf3076["__typename"]
  | FragmentSelf3076["typenameHint"] | FragmentToken3074 | FragmentToken3075;
