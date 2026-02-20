import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken182 } from "./fragment182";
import type { FragmentToken183 } from "./fragment183";

export const FRAGMENT_184 = gql(`
  fragment Fragment184 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult184 = ResultOf<typeof FRAGMENT_184>;
type FragmentSelf184 = NonNullable<FragmentResult184>;

export type FragmentToken184 =
  | FragmentSelf184["__typename"]
  | FragmentSelf184["typenameHint"] | FragmentToken182 | FragmentToken183;
