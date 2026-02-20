import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4340 } from "./fragment4340";
import type { FragmentToken4341 } from "./fragment4341";

export const FRAGMENT_4342 = gql(`
  fragment Fragment4342 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult4342 = ResultOf<typeof FRAGMENT_4342>;
type FragmentSelf4342 = NonNullable<FragmentResult4342>;

export type FragmentToken4342 =
  | FragmentSelf4342["__typename"]
  | FragmentSelf4342["typenameHint"] | FragmentToken4340 | FragmentToken4341;
