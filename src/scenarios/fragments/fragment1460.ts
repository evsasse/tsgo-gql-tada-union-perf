import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1458 } from "./fragment1458";
import type { FragmentToken1459 } from "./fragment1459";

export const FRAGMENT_1460 = gql(`
  fragment Fragment1460 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult1460 = ResultOf<typeof FRAGMENT_1460>;
type FragmentSelf1460 = NonNullable<FragmentResult1460>;

export type FragmentToken1460 =
  | FragmentSelf1460["__typename"]
  | FragmentSelf1460["typenameHint"] | FragmentToken1458 | FragmentToken1459;
