import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4530 } from "./fragment4530";
import type { FragmentToken4531 } from "./fragment4531";

export const FRAGMENT_4532 = gql(`
  fragment Fragment4532 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult4532 = ResultOf<typeof FRAGMENT_4532>;
type FragmentSelf4532 = NonNullable<FragmentResult4532>;

export type FragmentToken4532 =
  | FragmentSelf4532["__typename"]
  | FragmentSelf4532["typenameHint"] | FragmentToken4530 | FragmentToken4531;
