import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken214 } from "./fragment214";
import type { FragmentToken215 } from "./fragment215";

export const FRAGMENT_216 = gql(`
  fragment Fragment216 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult216 = ResultOf<typeof FRAGMENT_216>;
type FragmentSelf216 = NonNullable<FragmentResult216>;

export type FragmentToken216 =
  | FragmentSelf216["__typename"]
  | FragmentSelf216["typenameHint"] | FragmentToken214 | FragmentToken215;
