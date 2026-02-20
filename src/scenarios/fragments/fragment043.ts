import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken041 } from "./fragment041";
import type { FragmentToken042 } from "./fragment042";

export const FRAGMENT_043 = gql(`
  fragment Fragment043 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult043 = ResultOf<typeof FRAGMENT_043>;
type FragmentSelf043 = NonNullable<FragmentResult043>;

export type FragmentToken043 =
  | FragmentSelf043["__typename"]
  | FragmentSelf043["typenameHint"] | FragmentToken041 | FragmentToken042;
