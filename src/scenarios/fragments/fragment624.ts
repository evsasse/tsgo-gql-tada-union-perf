import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken622 } from "./fragment622";
import type { FragmentToken623 } from "./fragment623";

export const FRAGMENT_624 = gql(`
  fragment Fragment624 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult624 = ResultOf<typeof FRAGMENT_624>;
type FragmentSelf624 = NonNullable<FragmentResult624>;

export type FragmentToken624 =
  | FragmentSelf624["__typename"]
  | FragmentSelf624["typenameHint"] | FragmentToken622 | FragmentToken623;
