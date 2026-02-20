import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4272 } from "./fragment4272";
import type { FragmentToken4273 } from "./fragment4273";

export const FRAGMENT_4274 = gql(`
  fragment Fragment4274 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult4274 = ResultOf<typeof FRAGMENT_4274>;
type FragmentSelf4274 = NonNullable<FragmentResult4274>;

export type FragmentToken4274 =
  | FragmentSelf4274["__typename"]
  | FragmentSelf4274["typenameHint"] | FragmentToken4272 | FragmentToken4273;
