import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken573 } from "./fragment573";
import type { FragmentToken574 } from "./fragment574";

export const FRAGMENT_575 = gql(`
  fragment Fragment575 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult575 = ResultOf<typeof FRAGMENT_575>;
type FragmentSelf575 = NonNullable<FragmentResult575>;

export type FragmentToken575 =
  | FragmentSelf575["__typename"]
  | FragmentSelf575["typenameHint"] | FragmentToken573 | FragmentToken574;
