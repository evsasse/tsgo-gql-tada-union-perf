import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4698 } from "./fragment4698";
import type { FragmentToken4699 } from "./fragment4699";

export const FRAGMENT_4700 = gql(`
  fragment Fragment4700 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult4700 = ResultOf<typeof FRAGMENT_4700>;
type FragmentSelf4700 = NonNullable<FragmentResult4700>;

export type FragmentToken4700 =
  | FragmentSelf4700["__typename"]
  | FragmentSelf4700["typenameHint"] | FragmentToken4698 | FragmentToken4699;
