import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken413 } from "./fragment413";
import type { FragmentToken414 } from "./fragment414";

export const FRAGMENT_415 = gql(`
  fragment Fragment415 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult415 = ResultOf<typeof FRAGMENT_415>;
type FragmentSelf415 = NonNullable<FragmentResult415>;

export type FragmentToken415 =
  | FragmentSelf415["__typename"]
  | FragmentSelf415["typenameHint"] | FragmentToken413 | FragmentToken414;
