import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4085 } from "./fragment4085";
import type { FragmentToken4086 } from "./fragment4086";

export const FRAGMENT_4087 = gql(`
  fragment Fragment4087 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult4087 = ResultOf<typeof FRAGMENT_4087>;
type FragmentSelf4087 = NonNullable<FragmentResult4087>;

export type FragmentToken4087 =
  | FragmentSelf4087["__typename"]
  | FragmentSelf4087["typenameHint"] | FragmentToken4085 | FragmentToken4086;
