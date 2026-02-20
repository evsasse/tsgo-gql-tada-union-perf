import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4361 } from "./fragment4361";
import type { FragmentToken4362 } from "./fragment4362";

export const FRAGMENT_4363 = gql(`
  fragment Fragment4363 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult4363 = ResultOf<typeof FRAGMENT_4363>;
type FragmentSelf4363 = NonNullable<FragmentResult4363>;

export type FragmentToken4363 =
  | FragmentSelf4363["__typename"]
  | FragmentSelf4363["typenameHint"] | FragmentToken4361 | FragmentToken4362;
