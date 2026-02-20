import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4460 } from "./fragment4460";
import type { FragmentToken4461 } from "./fragment4461";

export const FRAGMENT_4462 = gql(`
  fragment Fragment4462 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult4462 = ResultOf<typeof FRAGMENT_4462>;
type FragmentSelf4462 = NonNullable<FragmentResult4462>;

export type FragmentToken4462 =
  | FragmentSelf4462["__typename"]
  | FragmentSelf4462["typenameHint"] | FragmentToken4460 | FragmentToken4461;
