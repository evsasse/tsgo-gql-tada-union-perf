import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4386 } from "./fragment4386";
import type { FragmentToken4387 } from "./fragment4387";

export const FRAGMENT_4388 = gql(`
  fragment Fragment4388 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult4388 = ResultOf<typeof FRAGMENT_4388>;
type FragmentSelf4388 = NonNullable<FragmentResult4388>;

export type FragmentToken4388 =
  | FragmentSelf4388["__typename"]
  | FragmentSelf4388["typenameHint"] | FragmentToken4386 | FragmentToken4387;
