import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4545 } from "./fragment4545";
import type { FragmentToken4546 } from "./fragment4546";

export const FRAGMENT_4547 = gql(`
  fragment Fragment4547 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult4547 = ResultOf<typeof FRAGMENT_4547>;
type FragmentSelf4547 = NonNullable<FragmentResult4547>;

export type FragmentToken4547 =
  | FragmentSelf4547["__typename"]
  | FragmentSelf4547["typenameHint"] | FragmentToken4545 | FragmentToken4546;
