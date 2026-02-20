import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken074 } from "./fragment074";
import type { FragmentToken075 } from "./fragment075";

export const FRAGMENT_076 = gql(`
  fragment Fragment076 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult076 = ResultOf<typeof FRAGMENT_076>;
type FragmentSelf076 = NonNullable<FragmentResult076>;

export type FragmentToken076 =
  | FragmentSelf076["__typename"]
  | FragmentSelf076["typenameHint"] | FragmentToken074 | FragmentToken075;
