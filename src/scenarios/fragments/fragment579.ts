import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken577 } from "./fragment577";
import type { FragmentToken578 } from "./fragment578";

export const FRAGMENT_579 = gql(`
  fragment Fragment579 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult579 = ResultOf<typeof FRAGMENT_579>;
type FragmentSelf579 = NonNullable<FragmentResult579>;

export type FragmentToken579 =
  | FragmentSelf579["__typename"]
  | FragmentSelf579["typenameHint"] | FragmentToken577 | FragmentToken578;
