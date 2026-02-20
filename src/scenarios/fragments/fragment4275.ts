import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4273 } from "./fragment4273";
import type { FragmentToken4274 } from "./fragment4274";

export const FRAGMENT_4275 = gql(`
  fragment Fragment4275 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult4275 = ResultOf<typeof FRAGMENT_4275>;
type FragmentSelf4275 = NonNullable<FragmentResult4275>;

export type FragmentToken4275 =
  | FragmentSelf4275["__typename"]
  | FragmentSelf4275["typenameHint"] | FragmentToken4273 | FragmentToken4274;
