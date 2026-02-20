import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken221 } from "./fragment221";
import type { FragmentToken222 } from "./fragment222";

export const FRAGMENT_223 = gql(`
  fragment Fragment223 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult223 = ResultOf<typeof FRAGMENT_223>;
type FragmentSelf223 = NonNullable<FragmentResult223>;

export type FragmentToken223 =
  | FragmentSelf223["__typename"]
  | FragmentSelf223["typenameHint"] | FragmentToken221 | FragmentToken222;
