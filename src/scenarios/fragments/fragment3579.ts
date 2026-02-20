import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3577 } from "./fragment3577";
import type { FragmentToken3578 } from "./fragment3578";

export const FRAGMENT_3579 = gql(`
  fragment Fragment3579 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult3579 = ResultOf<typeof FRAGMENT_3579>;
type FragmentSelf3579 = NonNullable<FragmentResult3579>;

export type FragmentToken3579 =
  | FragmentSelf3579["__typename"]
  | FragmentSelf3579["typenameHint"] | FragmentToken3577 | FragmentToken3578;
