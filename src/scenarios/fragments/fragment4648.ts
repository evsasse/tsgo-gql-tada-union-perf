import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4646 } from "./fragment4646";
import type { FragmentToken4647 } from "./fragment4647";

export const FRAGMENT_4648 = gql(`
  fragment Fragment4648 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult4648 = ResultOf<typeof FRAGMENT_4648>;
type FragmentSelf4648 = NonNullable<FragmentResult4648>;

export type FragmentToken4648 =
  | FragmentSelf4648["__typename"]
  | FragmentSelf4648["typenameHint"] | FragmentToken4646 | FragmentToken4647;
