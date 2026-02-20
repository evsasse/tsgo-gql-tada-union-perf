import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4086 } from "./fragment4086";
import type { FragmentToken4087 } from "./fragment4087";

export const FRAGMENT_4088 = gql(`
  fragment Fragment4088 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult4088 = ResultOf<typeof FRAGMENT_4088>;
type FragmentSelf4088 = NonNullable<FragmentResult4088>;

export type FragmentToken4088 =
  | FragmentSelf4088["__typename"]
  | FragmentSelf4088["typenameHint"] | FragmentToken4086 | FragmentToken4087;
