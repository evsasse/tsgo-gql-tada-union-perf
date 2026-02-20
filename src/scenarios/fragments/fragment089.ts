import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken087 } from "./fragment087";
import type { FragmentToken088 } from "./fragment088";

export const FRAGMENT_089 = gql(`
  fragment Fragment089 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult089 = ResultOf<typeof FRAGMENT_089>;
type FragmentSelf089 = NonNullable<FragmentResult089>;

export type FragmentToken089 =
  | FragmentSelf089["__typename"]
  | FragmentSelf089["typenameHint"] | FragmentToken087 | FragmentToken088;
