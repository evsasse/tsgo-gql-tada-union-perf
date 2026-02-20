import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4796 } from "./fragment4796";
import type { FragmentToken4797 } from "./fragment4797";

export const FRAGMENT_4798 = gql(`
  fragment Fragment4798 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult4798 = ResultOf<typeof FRAGMENT_4798>;
type FragmentSelf4798 = NonNullable<FragmentResult4798>;

export type FragmentToken4798 =
  | FragmentSelf4798["__typename"]
  | FragmentSelf4798["typenameHint"] | FragmentToken4796 | FragmentToken4797;
