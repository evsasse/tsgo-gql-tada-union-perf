import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3062 } from "./fragment3062";
import type { FragmentToken3063 } from "./fragment3063";

export const FRAGMENT_3064 = gql(`
  fragment Fragment3064 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult3064 = ResultOf<typeof FRAGMENT_3064>;
type FragmentSelf3064 = NonNullable<FragmentResult3064>;

export type FragmentToken3064 =
  | FragmentSelf3064["__typename"]
  | FragmentSelf3064["typenameHint"] | FragmentToken3062 | FragmentToken3063;
