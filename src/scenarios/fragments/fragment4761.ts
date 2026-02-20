import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4759 } from "./fragment4759";
import type { FragmentToken4760 } from "./fragment4760";

export const FRAGMENT_4761 = gql(`
  fragment Fragment4761 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult4761 = ResultOf<typeof FRAGMENT_4761>;
type FragmentSelf4761 = NonNullable<FragmentResult4761>;

export type FragmentToken4761 =
  | FragmentSelf4761["__typename"]
  | FragmentSelf4761["typenameHint"] | FragmentToken4759 | FragmentToken4760;
