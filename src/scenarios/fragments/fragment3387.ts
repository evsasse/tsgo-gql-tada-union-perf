import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3385 } from "./fragment3385";
import type { FragmentToken3386 } from "./fragment3386";

export const FRAGMENT_3387 = gql(`
  fragment Fragment3387 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult3387 = ResultOf<typeof FRAGMENT_3387>;
type FragmentSelf3387 = NonNullable<FragmentResult3387>;

export type FragmentToken3387 =
  | FragmentSelf3387["__typename"]
  | FragmentSelf3387["typenameHint"] | FragmentToken3385 | FragmentToken3386;
