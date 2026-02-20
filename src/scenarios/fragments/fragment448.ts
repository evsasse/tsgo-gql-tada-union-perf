import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken446 } from "./fragment446";
import type { FragmentToken447 } from "./fragment447";

export const FRAGMENT_448 = gql(`
  fragment Fragment448 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult448 = ResultOf<typeof FRAGMENT_448>;
type FragmentSelf448 = NonNullable<FragmentResult448>;

export type FragmentToken448 =
  | FragmentSelf448["__typename"]
  | FragmentSelf448["typenameHint"] | FragmentToken446 | FragmentToken447;
