import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4345 } from "./fragment4345";
import type { FragmentToken4346 } from "./fragment4346";

export const FRAGMENT_4347 = gql(`
  fragment Fragment4347 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult4347 = ResultOf<typeof FRAGMENT_4347>;
type FragmentSelf4347 = NonNullable<FragmentResult4347>;

export type FragmentToken4347 =
  | FragmentSelf4347["__typename"]
  | FragmentSelf4347["typenameHint"] | FragmentToken4345 | FragmentToken4346;
