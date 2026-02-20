import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3939 } from "./fragment3939";
import type { FragmentToken3940 } from "./fragment3940";

export const FRAGMENT_3941 = gql(`
  fragment Fragment3941 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult3941 = ResultOf<typeof FRAGMENT_3941>;
type FragmentSelf3941 = NonNullable<FragmentResult3941>;

export type FragmentToken3941 =
  | FragmentSelf3941["__typename"]
  | FragmentSelf3941["typenameHint"] | FragmentToken3939 | FragmentToken3940;
