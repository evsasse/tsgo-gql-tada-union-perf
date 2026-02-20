import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken818 } from "./fragment818";
import type { FragmentToken819 } from "./fragment819";

export const FRAGMENT_820 = gql(`
  fragment Fragment820 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult820 = ResultOf<typeof FRAGMENT_820>;
type FragmentSelf820 = NonNullable<FragmentResult820>;

export type FragmentToken820 =
  | FragmentSelf820["__typename"]
  | FragmentSelf820["typenameHint"] | FragmentToken818 | FragmentToken819;
