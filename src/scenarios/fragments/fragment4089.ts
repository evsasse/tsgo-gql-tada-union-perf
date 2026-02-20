import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4087 } from "./fragment4087";
import type { FragmentToken4088 } from "./fragment4088";

export const FRAGMENT_4089 = gql(`
  fragment Fragment4089 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult4089 = ResultOf<typeof FRAGMENT_4089>;
type FragmentSelf4089 = NonNullable<FragmentResult4089>;

export type FragmentToken4089 =
  | FragmentSelf4089["__typename"]
  | FragmentSelf4089["typenameHint"] | FragmentToken4087 | FragmentToken4088;
