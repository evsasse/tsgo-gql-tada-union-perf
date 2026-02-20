import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3386 } from "./fragment3386";
import type { FragmentToken3387 } from "./fragment3387";

export const FRAGMENT_3388 = gql(`
  fragment Fragment3388 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult3388 = ResultOf<typeof FRAGMENT_3388>;
type FragmentSelf3388 = NonNullable<FragmentResult3388>;

export type FragmentToken3388 =
  | FragmentSelf3388["__typename"]
  | FragmentSelf3388["typenameHint"] | FragmentToken3386 | FragmentToken3387;
