import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken546 } from "./fragment546";
import type { FragmentToken547 } from "./fragment547";

export const FRAGMENT_548 = gql(`
  fragment Fragment548 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult548 = ResultOf<typeof FRAGMENT_548>;
type FragmentSelf548 = NonNullable<FragmentResult548>;

export type FragmentToken548 =
  | FragmentSelf548["__typename"]
  | FragmentSelf548["typenameHint"] | FragmentToken546 | FragmentToken547;
