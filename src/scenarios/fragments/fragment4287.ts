import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4285 } from "./fragment4285";
import type { FragmentToken4286 } from "./fragment4286";

export const FRAGMENT_4287 = gql(`
  fragment Fragment4287 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult4287 = ResultOf<typeof FRAGMENT_4287>;
type FragmentSelf4287 = NonNullable<FragmentResult4287>;

export type FragmentToken4287 =
  | FragmentSelf4287["__typename"]
  | FragmentSelf4287["typenameHint"] | FragmentToken4285 | FragmentToken4286;
