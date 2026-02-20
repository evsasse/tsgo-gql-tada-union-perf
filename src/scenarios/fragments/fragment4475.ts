import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4473 } from "./fragment4473";
import type { FragmentToken4474 } from "./fragment4474";

export const FRAGMENT_4475 = gql(`
  fragment Fragment4475 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult4475 = ResultOf<typeof FRAGMENT_4475>;
type FragmentSelf4475 = NonNullable<FragmentResult4475>;

export type FragmentToken4475 =
  | FragmentSelf4475["__typename"]
  | FragmentSelf4475["typenameHint"] | FragmentToken4473 | FragmentToken4474;
