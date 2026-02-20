import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4274 } from "./fragment4274";
import type { FragmentToken4275 } from "./fragment4275";

export const FRAGMENT_4276 = gql(`
  fragment Fragment4276 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult4276 = ResultOf<typeof FRAGMENT_4276>;
type FragmentSelf4276 = NonNullable<FragmentResult4276>;

export type FragmentToken4276 =
  | FragmentSelf4276["__typename"]
  | FragmentSelf4276["typenameHint"] | FragmentToken4274 | FragmentToken4275;
